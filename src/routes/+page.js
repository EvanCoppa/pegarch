// src/routes/+page.js

import {createClient} from "@sanity/client";

const client = createClient({
  projectId: "9l76a1pk",
  dataset: "production",
  apiVersion: "2024-06-21",
  useCdn: false
});

export async function load({ params }) {
    const data = await client.fetch(`*[_type == "page"]`);
  
    if (data) {
      return {
        page: data
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }