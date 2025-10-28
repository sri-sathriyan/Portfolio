import React from 'react';
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  tooltip: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl: string;
  ciCdStatusUrl?: string;
  videoPreviewUrl?: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconType;
}
