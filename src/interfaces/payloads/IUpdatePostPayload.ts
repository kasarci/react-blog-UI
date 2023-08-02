export interface IUpdatePostPayload {
    id:          string;
    title:       string;
    content:     string;
    categoryIds: string[];
    tagIds?:     string[];
}
