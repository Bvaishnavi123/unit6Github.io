export const FolderData = {
  name: "Root  Folder",
  isFolder: "true",
  items: [
    {
      name: "Public",
      isFolder: "true",
      items: [
        {
          name: "Public Nested1",
          isFolder: "true",
          items: [
            {
              name: "index.html",
              isFolder: "false",
            },
            {
              name: "hello.html",
              isFolder: "false",
            },
          ],
        },
        {
          name: "Public Nested2",
          isFolder: "false",
        },
      ],
    },
    {
      name: "SRC",
      isFolder: "true",
      items: [
        {
          name: "App.js",
          isFolder: "false",
        },
        {
          name: "index.js",
          isFolder: "false",
        },
        {
          name: "style.css",
          isFolder: "false",
        },
      ]
    },
    {
      name: "Package.json",
      isFolder: "false",
    },
  ],
};
