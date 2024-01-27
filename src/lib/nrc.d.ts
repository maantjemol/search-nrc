export interface NRCData {
	data: Data;
	pages: Pages;
}

export interface Data {
	platform: string;
	marketplace: string;
	language: string;
	units: string;
	lastModified: Date;
	audioGuidedRuns: AudioGuidedRun[];
}

export interface AudioGuidedRun {
	id: string;
	properties: Properties;
	landing: Landing;
	detail: Detail;
	triggers: unknown[];
}

export interface Detail {
	autopause: AudioFeedback;
	audioFeedback: AudioFeedback;
	activityVoiceovers: ActivityVoiceovers;
	metricVoiceovers: AudioFeedback;
	accentColor: string;
	headerCard: Landing;
	content: Content[];
}

export type ActivityVoiceovers = 'ON';

export type AudioFeedback = 'DEFAULT' | 'OFF';

export interface Content {
	type: ContentType;
	title: string;
	body?: string;
	titleColor: TitleColor;
	backgroundColor: BackgroundColor;
	providers: Provider[];
	url?: string;
}

export type BackgroundColor =
	| '#252525'
	| '#111111'
	| '#3b42cf'
	| '#222222'
	| '#55505A'
	| '#403D44'
	| '#bf0835'
	| '#413D45';

export interface Provider {
	type: ProviderType;
	url: string;
}

export type ProviderType = 'APPLE_MUSIC' | 'SPOTIFY' | 'APPLE MUSIC';

export type TitleColor = '#ffffff' | '#FFFFFF' | '#111111';

export type ContentType = 'TEXT' | 'MUSIC';

export interface Landing {
	title: string;
	subtitle: string;
	url: string;
	backgroundColor: string;
	titleColor: TitleColor;
	featuredUrl?: string;
}

export interface Properties {
	activeGoal: number;
	autodownload: boolean;
	goal: number;
	activityType: ActivityType;
	previousId?: string;
	previousIds?: string[];
	taxonomyIds?: string[];
}

export type ActivityType = 'DURATION' | 'SPEED_DURATION' | 'DISTANCE';

export interface Pages {
	next: string;
	prev: string;
	totalPages: number;
	totalResources: number;
}
