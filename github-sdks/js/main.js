import { Octokit, App } from "octokit";

console.log(`TOKEN: ${process.env.GH_TOKEN}`)

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'rakiit',
    repo: 'Github-Examples',
    ref: 'refs/heads/sdksjs',
    sha: '91d2d038f44f022931b78272289275aa0f7e8c5b',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })