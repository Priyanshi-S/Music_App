import pandas as pd
from pymongo import MongoClient
import recommender as Recommenders
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import pairwise_distances

sc_X = StandardScaler()

filename = "song_data.csv"    
songdata = pd.read_csv(filename)

def split(df, group):
    gb = df.groupby(group)
    return [gb.get_group(x) for x in gb.groups]

def cal_dis(test_song,X_train):
    #X_train = sc_X.fit_transform(X_train)
    #test_song = sc_X.fit_transform(test_song)
    dist_mat = list(pairwise_distances(test_song,X_train))
    dis = sum(map(sum, dist_mat))/len(dist_mat)/len(dist_mat[0])
    return dis


def user_data():
    client = MongoClient()
    #point the client at mongo URI
    client = MongoClient('mongodb://localhost:27017/project')
    #select database
    db = client['project']
    #select the collection within the database
    test = db.history
    #convert entire collection to Pandas dataframe
    test = pd.DataFrame(list(test.find()),columns = ['email','song_id','listen_count'])
    return test
userdata = user_data()

def final_data():
    df = pd.DataFrame(songdata, columns = ['song_id','duration','BPM','Energy','loudness','Danceability','valence','acoustic'])
    
    finaldata = pd.merge(userdata, df, on='song_id', how='left')
    finaldata = finaldata.dropna()
    return finaldata

def recPlaylist(email_id):
    finaldata = final_data()
    particular_user = split(finaldata,'email')
    
    ir = Recommenders.item_similarity_recommender_py()
    ir.create(finaldata, 'email', 'song_id')
    
    x = ir.recommend(email_id)

    for i in particular_user:
        if(i.email.unique() == [email_id]):
            feature = i.loc[:,['duration','BPM','Energy','loudness','Danceability','valence','acoustic']]
            break
          
    finaldata = finaldata.set_index(['song_id'])        
    recommended = []
    for j in range(len(x)):
        test_song = finaldata.loc[x['song'].loc[j]]
        if not(isinstance(test_song, pd.DataFrame)):
            test_song = test_song.to_frame().T
        test_song = test_song.loc[:,['duration','BPM','Energy','loudness','Danceability','valence','acoustic']]
        test_dis = cal_dis(test_song,feature)
        recommendation = [test_dis,x['song'].loc[j]]
        recommended.append(recommendation)
    recommended.sort()
    recommended = [recommended[i][1] for i in range(len(recommended))]
    return recommended

def recPlaylist1(language,email_id):
    finaldata = final_data()
    particular_user = split(finaldata,'email')
    
    for i in particular_user:
        if(i.email.unique() == [email_id]):
            feature = i.loc[:,['duration','BPM','Energy','loudness','Danceability','valence','acoustic']]
    recommended = []
    x = []    
    particular_user = split(songdata,'language')
    for i in particular_user:
        if(i.language.unique() == [language]):
            songs = i
            x = list(i.song_id.unique())
            songs = songs.set_index(['song_id']) 
    for j in range(len(x)):
        test_song = songs.loc[x[j]]
        if not(isinstance(test_song, pd.DataFrame)):
            test_song = test_song.to_frame().T
        test_song = test_song.loc[:,['duration','BPM','Energy','loudness','Danceability','valence','acoustic']]
        test_dis = cal_dis(test_song,feature)
        recommendation = [test_dis,x[j]]
        recommended.append(recommendation)
    recommended.sort()
    recommended = [recommended[i][1] for i in range(len(recommended))]
    return recommended
    
def recPopular(email_id):
    recommended =[]
    pr = Recommenders.popularity_recommender_py()
    finaldata = final_data()
    pr.create(finaldata, 'email', 'song_id')
    recommendations = pr.recommend(email_id)
    recommended = list(recommendations.song_id.unique())
    return recommended

def recPopular1(language):
    recommended = []
    particular_user = split(songdata,'language')
    for i in particular_user:
        if(i.language.unique() == [language]):
            songs = i.loc[:,['song_id','popularity']]
            recommended = list(songs.song_id.unique())
    return recommended
        