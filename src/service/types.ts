export interface APIResponse {
    status:boolean;
    data: {} | [] | null | OnlyData;
    message: string;
}

interface OnlyData {
    data: {} | [] | null;
}