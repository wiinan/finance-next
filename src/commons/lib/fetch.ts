"use server";

import { getCookie } from "cookies-next/server";
import { SearchParams } from "next/dist/server/request/search-params";
import { cookies } from "next/headers";

const getHeaders = async (options: HeadersInit = {}) => {
  const headers = new Headers({
    accept: "application/json",
    "Content-Type": "application/json",
    ...options,
  });

  const token = await getCookie("token", { cookies });

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
};

const getUrl = (path: string) => new URL(`${process.env.endPoint}/${path}`);

const updateUrlParamsFilters = <T>(url: URL, filter: T): void => {
  Object.keys(filter).forEach((key) =>
    url.searchParams.append(key, filter[key])
  );
};

export const get = async <T, F>(
  path: string,
  filter?: F,
  options: HeadersInit = {}
): Promise<T> => {
  const url = getUrl(path);

  if (filter) {
    updateUrlParamsFilters<F>(url, filter);
  }

  const fetchOptions = {
    headers: await getHeaders(options),
  };

  const data = await fetch(url, fetchOptions);

  return data.json();
};

export const post = async <T>(
  path: string,
  data: object,
  options: HeadersInit = {}
): Promise<T> => {
  const url = getUrl(path);
  const fetchOptions = {
    method: "post",
    body: JSON.stringify(data),
    headers: await getHeaders(options),
  };

  const response = await fetch(url, fetchOptions);

  return response.json();
};
