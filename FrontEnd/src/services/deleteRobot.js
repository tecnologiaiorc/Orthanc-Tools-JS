import { toastifyError } from './toastify'

const deleteRobot = {

    createDeleteRobot(deleteArray, username){

        const createDeleteRobotOption = {
            method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deleteArray)
        }

        return fetch('/api/robot/' + username + '/delete', createDeleteRobotOption ).then(answer => {
            if (!answer.ok) {throw answer}
            return answer.json()
        }).catch(error => {
            toastifyError('error', error)
        })
    }, 

    getDeleteRobot(username){

        const getDeleteRobotOption = {
            method: 'GET', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }

        return fetch('/api/robot/' + username + '/delete', getDeleteRobotOption ).then(answer => {
            if (!answer.ok) {throw answer}
            return answer.json()
        }).catch(error => {
            toastifyError(error)
        })
    }


}

export default deleteRobot