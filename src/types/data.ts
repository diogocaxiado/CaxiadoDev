export interface Data {
    name: string;
    stack: string[];
    description: string;
    avatarProfile: string;
    avatarKnowlodges: string;
    avatarProjects: string;
    socialMedia: { id: string, name: string; image: string; url: string }[];
    knowlodge: { id: string; name: string; image: string; }[]
    project: {id: string; name: string; description: string; tags: string[]; image: string; link: string }[]
}