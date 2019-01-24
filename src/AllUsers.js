import React from 'react'
import AddUser from './AddUser'
import UsersList from './UsersList'
import Paper from 'material-ui/Paper'

const style = {
    paper: {
      marginTop: '40px'
    }
  }

class AllUsers extends React.Component {
    state = JSON.parse(localStorage.getItem('UsersState'))
        ||
        {
            users: [],
            newUserName: '',
        }

    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage = () => localStorage.setItem(
        'UsersState',
        JSON.stringify(this.state)
    )

    createUser = (name) => ({
        key: Date.now(),
        userName: name
    })

    addUser = () => this.setState({
        users: this.state.users.concat(
            this.createUser(
                this.state.newUserName
            )
        ),
        newUserName: ''
    })

    onNewUserNameChangeHandler = event => this.setState({ newUserName: event.target.value })

    render() {
        return (
            <Paper
            style={style.paper}
            >
                <AddUser
                    newUserName={this.state.newUserName}
                    onNewUserNameChangeHandler={this.onNewUserNameChangeHandler}
                    addUser={this.addUser}
                >
                </AddUser>
                <UsersList
                    usersList={this.state.users}
                    userName={this.userName}
                    newUserName={this.state.newUserName}
                >
                </UsersList>
            </Paper>
        )
    }
}

export default AllUsers