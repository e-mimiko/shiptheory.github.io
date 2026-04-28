#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr 27 21:57:51 2026

@author: emimimiko
"""

import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv("bl-pairings.csv")

print(df.columns)

plt.figure(figsize=(20, 10))
plt.xticks(rotation=45) 
sns.barplot(x=df["seme_age"], y=df["seme_is_taller1_same0_shorter2"])
plt.show()