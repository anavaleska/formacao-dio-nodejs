interface HttpResponse {
  statusCode: number;
  body: any;
}

export const ok = async (data: any): Promise<HttpResponse> => ({
  statusCode: 200,
  body: data,
});

export const notFound = async (data: any): Promise<HttpResponse> => ({
  statusCode: 404,
  body: data,
});
