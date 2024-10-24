import Link from 'next/link'
import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'

const username = 'bradtraversy'

export default async function ReposPage() {
  // 1. SSG: Static Site Generation 정적 페이지 생성
  // const response = await fetch(`https://api.github.com/users/${username}/repos`)

  // 2. SSR: Server-Side Rendering 동적 페이지 생성
  // const response = await fetch(
  //   `https://api.github.com/users/${username}/repos`,
  //   { cache: 'no-store' }
  // )

  // 3. ISR: Incremental Static Generation 일정 시간 간격으로 페이지 갱신
  //const response = await fetch(
  //  `https://api.github.com/users/${username}/repos`,
  //  { next: { revalidate: 60 } }
  //await new Promise((resolve) => setTimeout(resolve, 1000))
  //const repos = await response.json()
  // console.log(repos)

  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await response.json()

  console.log(repos)
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Github repositories of {username}
      </h2>
      <h1>
        {
          /* eslint-disable @typescript-eslint/no-explicit-any */
          repos.map((repo: any) => (
            <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
              <Link href={`/repos/${repo.name}`}>
                <h3 className="text-xl font-bold">{repo.name}</h3>
                <p> {repo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEye /> {repo.stargazers_count}
                  </span>
                </div>
              </Link>
            </li>
          ))
        }
      </h1>
    </div>
  )
}
