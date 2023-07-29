import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
}

export const confirmDeleteUser = (id) => {
    MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteUser(id)
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
          )
        }
      })
}