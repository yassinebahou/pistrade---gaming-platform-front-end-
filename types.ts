import React from 'react';

export interface Game {
  id: string;
  title: string;
  image: string;
  activePlayers: string;
  likes: string;
  tag: string;
}

export interface Avatar {
  id: string;
  name: string;
  style: string;
  image: string;
  color: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export enum ThemeColor {
  RED = 'bg-roblox-red',
  YELLOW = 'bg-roblox-yellow',
  BLUE = 'bg-roblox-blue',
  GREEN = 'bg-roblox-green',
  BLACK = 'bg-roblox-black',
}