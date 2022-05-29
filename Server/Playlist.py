# -*- coding: utf-8 -*-
"""
Created on Sat May 14 22:31:08 2022

@author: rohit
"""

import sys

playlist = []
if(sys.argv[1]=="recommended"):
    playlist = [2,4,6]
else:
    playlist = [1,3,5]
    
print(playlist)
sys.stdout.flush()