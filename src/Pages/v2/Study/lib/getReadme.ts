export const getReadme = async (state: any) => {
  const readme = await fetch(
    `https://raw.githubusercontent.com/${state.owner}/${state.repo}/${state.branch}/README.md`
  )
  if (readme.ok) {
    return await readme.text()
  }
  return '<p>Due to unexpected circumstances I was unable to find enough mood to fill this one</p>'
}
