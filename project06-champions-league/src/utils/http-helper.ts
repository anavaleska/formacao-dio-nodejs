import type { HttpResponse } from "../interfaces/http-response.interface";

export const ok = async (data: any): Promise<HttpResponse> => ({
  statusCode: 200,
  body: data,
});

export const notFound = async (data: any): Promise<HttpResponse> => ({
  statusCode: 404,
  body: data,
});

export const badRequest = async (error: Error): Promise<HttpResponse> => ({
  statusCode: 400,
  body: error,
});

export const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: {
      message: "Player created successfully.",
    },
  };
};
