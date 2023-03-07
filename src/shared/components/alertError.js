import swal from 'sweetalert'

export default (title, text) => {
  return swal({
    title: title,
    text: text,
    icon: 'error',
    buttons: false,
    timer: 3000
  })
}
