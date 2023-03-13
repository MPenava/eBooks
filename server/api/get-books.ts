import { queryByCollection } from "../lib/firestore";

export default async () => {
  const docs = await queryByCollection("books");
  return docs;
};
