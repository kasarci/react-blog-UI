export interface IAddPostPayload {
    writerId:    string;
    title:       string;
    content:     string;
    categoryIds: string[];
    tagIds?:      string[];
}
