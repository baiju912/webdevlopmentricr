import React from 'react'

const Home = () => {
  const data = [
  {
    "id": "1",
    "title": "Welcome Note",
    "content": "This is your first note. You can edit or delete it anytime."
  },
  {
    "id": "2",
    "title": "Meeting Notes",
    "content": "Discuss project timeline, assign tasks, and set next meeting date."
  },
  {
    "id": "3",
    "title": "Shopping List",
    "content": "Milk, Bread, Eggs, Coffee, Fruits"
  },
  {
    "id": "4",
    "title": "Ideas",
    "content": "Build a notes app with search, tags, and cloud sync."
  },
  {
    "id": "5",
    "title": "Daily Reminder",
    "content": "Exercise for 30 minutes and read 10 pages of a book."
  }
]

  return (
    <>
    <div className='flex h-dvh'>
    <div className='bg-green-300 h-full w-[30%]'>
      {data.map((item,indx)=>(
        <button>{item.title}</button>
      ))};
      
    </div>
    <div className='bg-yellow-300 h-full w-[70%]'>Content</div>
    </div>
    </>
  )
}

export default Home;