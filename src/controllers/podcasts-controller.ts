import { IncomingMessage, ServerResponse } from "http";

export const getAllEpisodes = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify([
      {
        podcastName: "Name of the Podcast",
        episode: "Title of the Episode",
        videoID: "Unique Video ID",
        thumbnail: "URL of the Thumbnail",
        link: "URL of the Podcast Episode",
        category: ["Category1", "Category2"],
      },
      {
        podcastName: "Name of the Podcast",
        episode: "Title of the Episode",
        videoID: "Unique Video ID",
        thumbnail: "URL of the Thumbnail",
        link: "URL of the Podcast Episode",
        category: ["Category1", "Category2"],
      },
    ])
  );
};
