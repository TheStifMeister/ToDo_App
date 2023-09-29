import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { AuthContext, AuthProvider } from './AuthContext'
import Registration from './Registration'
import Login from './Login'
import Sidebar from './Sidebar'
import TaskBar from './TaskBar'
import TaskDetail from './TaskDetail'
import Navbar from './navbarHeader'

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null)

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <div className="flex">
          <Sidebar />
          <Switch>
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={TaskPage}>
              <TaskBar setSelectedTask={setSelectedTask} />
              <TaskDetail selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
            </PrivateRoute>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

const TaskPage = () => {
  return (
    <>
      <TaskBar />
      <TaskDetail />
    </>
  );
}

export default App