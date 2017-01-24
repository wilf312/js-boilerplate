import moment from 'moment'
import _ from 'lodash'


var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a')

console.log('PC '+ rightNow)

document.write('PC '+ rightNow)


const data = [
{
  id: 0,
},
{
  id: 1,
},
{
  id: 2,
},
{
  id: 3,
},
  ]

console.log(_.filter(data, {id: 1}))



