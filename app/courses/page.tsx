'use client'
import Courses from '@/components/Courses'
import { useEffect, useState } from 'react'

export default function CoursesPage() {
  const [courses, setCourses] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])

  if (Loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <Courses courses={courses} />
    </div>
  )
}
