# -*- coding: utf-8 -*-
"""
Created on Sat May 14 22:31:08 2022

@author: rohit
"""

import sys
import random
import data as rec

playlist = []
l = sys.argv[3].split(",")
if(sys.argv[1]=="recommended"):
    email_id = sys.argv[2]
    combine = []
    y = []
    x = rec.recPlaylist(email_id)
    combine.extend(x)
    if(len(x)!=0 and len(x)<=10):
        playlist.append(x)
    if(len(x)>10):
        x = [x[i] for i in range(10)]
        playlist.append(x)
    for i in range(len(l)):
        y = rec.recPlaylist1(l[i],email_id)
        combine.extend(y)
        if(len(y)!=0 and len(y)<=10):
            playlist.append(y)
        if(len(y)>10):
            y = [y[i] for i in range(10)]
            playlist.append(y)
    random.shuffle(combine)
    if(len(combine)!=0 and len(combine)<=15):
        playlist.append(combine)
    if(len(combine)>15):
        combine = [combine[i] for i in range(15)]
        playlist.append(combine)
elif(sys.argv[1]=="new"):
    combine = []
    email_id = sys.argv[2]
    for i in range(len(l)):
        x = rec.recPopular1(l[i])
        combine.extend(x)
        if(len(x)!=0 and len(x)<=10):
            playlist.append(x)
        if(len(x)>10):
            x = [x[i] for i in range(10)]
            playlist.append(x)
    y = rec.recPopular(email_id)    
    combine.extend(y)
    if(len(y)!=0 and len(y)<=10):
        playlist.append(y)
    if(len(y)>10):
        y = [y[i] for i in range(10)]
        playlist.append(y)
    random.shuffle(combine)
    if(len(combine)!=0 and len(combine)<=15):
        playlist.append(combine)
    if(len(combine)>15):
        combine = [combine[i] for i in range(15)]
        playlist.append(combine)
elif(sys.argv[1]=="trending"):
    email_id = sys.argv[2]
    combine = []
    for i in range(len(l)):
        x = rec.recPopular1(l[i])
        combine.extend(x)
        if(len(x)!=0 and len(x)<=10):
            playlist.append(x)
        if(len(x)>10):
            x = [x[i] for i in range(10)]
            playlist.append(x)
    y = rec.recPopular(email_id)    
    combine.extend(y)
    if(len(y)!=0 and len(y)<=10):
        playlist.append(y)
    if(len(y)>10):
        y = [y[i] for i in range(10)]
        playlist.append(y)
    random.shuffle(combine)
    if(len(combine)!=0 and len(combine)<=15):
        playlist.append(combine)
    if(len(combine)>15):
        combine = [combine[i] for i in range(15)]
        playlist.append(combine)
else:
    x = [1,2,3,4,5,6,7,8]
    y = [21,27,15,18,20]
    random.shuffle(x)
    random.shuffle(y)
    playlist = [x,y]
    
print(playlist)
sys.stdout.flush()