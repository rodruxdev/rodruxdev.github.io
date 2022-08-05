import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const getPagesFromDatabase = async () => {
  const databaseId = process.env.NOTION_DATABASE_ESP_ID;
  const sorts = [
    {
      timestamp: 'created_time',
      direction: 'ascending',
    },
  ];
  const response = await notion.databases.query({ database_id: databaseId, sorts: sorts });
  return response?.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocksFromPage = async (blockId) => {
  const response = await notion.blocks.children.list({ block_id: blockId });
  // TODO: Return all the children blocks
  return response;
};
