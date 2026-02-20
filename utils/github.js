export async function getGithubFolderContents(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}/contents/`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });
  if (!res.ok) return [];
  const data = await res.json(); 
  return data.map((item) => ({ name: item.name, isFolder: item.type === "dir" }));
}