export const useCategoryStore = defineStore("category", {
    state: () => ({
    categories: {} as any,
    status: false,
    message: "",
    }),
    actions: {
        async getAllCategory() {
            const { baseUrl, apikey } = useAppConfig();
            const { data, error } = await useFetch("/rest/v1/categories", {
                baseURL: baseUrl,
                method: "GET",
                headers: {
                    apikey: apikey,
                },
            });

            if (error.value) {
                this.status = false;
                this.message = "Get Products Failed !!!";
            } else if (data) {
                this.status = true;
                this.message = "Get Products successfully";
                this.categories = data.value;
            }
        },
        status: false,
        message: "",
        categories: undefined
    }
    })

function defineStore(arg0: string, arg1: { state: () => { categories: any; status: boolean; message: string; }; actions: {
    message: string;
    categories: any;
    status: boolean; getAllCategory(): Promise<void>; 
}; }) {
    throw new Error("Function not implemented.");
}


function useAppConfig(): { baseUrl: any; apikey: any; } {
    throw new Error("Function not implemented.");
}


function useFetch(arg0: string, arg1: { baseURL: any; method: string; headers: { apikey: any; }; }): { data: any; error: any; } | PromiseLike<{ data: any; error: any; }> {
    throw new Error("Function not implemented.");
}
