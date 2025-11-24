import React from 'react';
import { Game, Avatar, Feature } from './types';
import { Hammer, Users, Shirt, Gamepad2, Zap, Trophy, Smile, Sword } from 'lucide-react';

export const GAMES_DATA: Game[] = [
  {
    id: '1',
    title: 'Neon Obby Prime',
    image: 'https://picsum.photos/seed/obby/400/300',
    activePlayers: '245K',
    likes: '92%',
    tag: 'Adventure',
  },
  {
    id: '2',
    title: 'Cyber Ninja Legends',
    image: 'https://picsum.photos/seed/ninja/400/300',
    activePlayers: '1.2M',
    likes: '98%',
    tag: 'Fighting',
  },
  {
    id: '3',
    title: 'Metro Life 2077',
    image: 'https://picsum.photos/seed/city/400/300',
    activePlayers: '500K',
    likes: '95%',
    tag: 'Roleplay',
  },
  {
    id: '4',
    title: 'Turbo Racing Lite',
    image: 'https://picsum.photos/seed/race/400/300',
    activePlayers: '85K',
    likes: '89%',
    tag: 'Racing',
  },
  {
    id: '5',
    title: 'Mecha Pet Tycoon',
    image: 'https://picsum.photos/seed/pet/400/300',
    activePlayers: '320K',
    likes: '94%',
    tag: 'Tycoon',
  },
  {
    id: '6',
    title: 'Void Frontier Base',
    image: 'https://picsum.photos/seed/space/400/300',
    activePlayers: '45K',
    likes: '88%',
    tag: 'Sci-Fi',
  },
];

export const AVATARS_DATA: Avatar[] = [
  {
    id: 'ninja',
    name: 'Shadow Strike',
    style: 'Ninja Outfit',
    image: 'https://www.pockettactics.com/wp-content/sites/pockettactics/2020/10/roblox-e1657277965973.jpg',
    color: 'bg-roblox-dark',
    description: 'Stealthy, fast, and ready for combat.',
  },
  {
    id: 'pastel',
    name: 'Cyber Pop',
    style: 'Neon Cute',
    image: 'https://picsum.photos/seed/pastel_avatar/300/600',
    color: 'bg-roblox-blue',
    description: 'Electric style for the digital runway.',
  },
  {
    id: 'cyber',
    name: 'Glitch Warrior',
    style: 'Cyberpunk Armor',
    image: 'https://picsum.photos/seed/cyber_avatar/300/600',
    color: 'bg-roblox-purple',
    description: 'High-tech gear from the year 3000.',
  },
  {
    id: 'explorer',
    name: 'Void Walker',
    style: 'Space Explorer',
    image: 'https://picsum.photos/seed/explorer_avatar/300/600',
    color: 'bg-roblox-green',
    description: 'Equipped for the deepest nebulas.',
  },
  {
    id: 'knight',
    name: 'Neon Paladin',
    style: 'Holo Knight',
    image: 'https://picsum.photos/seed/knight_avatar/300/600',
    color: 'bg-roblox-yellow',
    description: 'Defending the grid one pixel at a time.',
  },
  {
    id: 'street',
    name: 'Urban Glider',
    style: 'Streetwear Tech',
    image: 'https://picsum.photos/seed/street_avatar/300/600',
    color: 'bg-roblox-red',
    description: 'Casual vibes for hanging out in the metropolis.',
  },
];

export const FEATURES_DATA: Feature[] = [
  {
    id: 'build',
    title: 'Build Your World',
    description: 'Use our studio to create anything you can imagine, from obstacle courses to cities.',
    icon: <Hammer size={40} className="text-black" />,
    color: 'bg-roblox-blue',
  },
  {
    id: 'play',
    title: 'Play Millions',
    description: 'Dive into an ever-expanding library of community-created experiences.',
    icon: <Gamepad2 size={40} className="text-black" />,
    color: 'bg-roblox-red',
  },
  {
    id: 'customize',
    title: 'Be Unique',
    description: 'Customize your avatar with tons of hats, shirts, faces, and gear.',
    icon: <Shirt size={40} className="text-black" />,
    color: 'bg-roblox-yellow',
  },
  {
    id: 'friends',
    title: 'Join Friends',
    description: 'Chat, hang out, and explore with millions of people across the globe.',
    icon: <Users size={40} className="text-black" />,
    color: 'bg-roblox-green',
  },
];