import type BlogPost from "../interfaces/blog";
import fetchApi from "../lib/strapi";


const data = await fetchApi<BlogPost>({
    endpoint: 'blogs',
    query:{ 'populate': '*' },
    wrappedByKey: 'data',
});

console.log(data);