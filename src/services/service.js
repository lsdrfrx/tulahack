export default class Service {

  _transformUserInfo = (userInfo) => {
    const {
      userid = null,
      name,
      surname,
      age = null,
      email,
      school = null,
      password,
      avatar = null
    } = userInfo;
    return {
      userid,
      name,
      surname,
      age,
      class: userInfo.hasOwnProperty('class') ? userInfo.class : null,
      email,
      school,
      password,
      avatar
    }
  }

  userAuth = async (userInfo) => {
    // /authentication
    const obj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        user: this._transformUserInfo(userInfo),
        new: userInfo.school !== undefined 
      })
    }

    console.log(this._transformUserInfo(userInfo))

    return userInfo;
  }

  getSchedule = async (userClass, school) => {
    // /schedule/school/class
    const schedule = [
      { 
        day: 'Время', 
        classes: ['7:45', '7:45', '7:45', '7:45', '7:45', '7:45', '7:45', '7:45'] },
      { 
        day: 'Понедельник', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Вторник', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Среда', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Четверг', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Пятница', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Суббота', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика']
      },
    ]

    return schedule;
  }

  getChatMessages = async () => {
    // /chat/messages
    const messages = [
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      }

    ]

    return messages;
  }

  sendMessage = async (name, surname, text) => {
    // /chat/sendMessage
    const obj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ name, surname, text })
    }

    const messages = [
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      },
      {
        name: 'Иван',
        surname: 'Иванов',
        text: 'fdaj;fafaaofo'
      }

    ]

    console.log({ name, surname, text })

    return messages;
  }
}