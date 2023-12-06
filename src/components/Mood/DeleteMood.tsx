import { DeleteMoodApi } from "../../api/crudMood";

function DeleteMood(props: any){

  async function handleDelete(){
    let result = await DeleteMoodApi(props.date)

    if(result.status == 200){
      props.setOpenDeleteModal(false);
      props.setNCrudAction(props.nCrudAction + 1);
    }
  }

  return(
  <>
  <div className="p-5">
    <div className="font-bold text-3xl text-center mb-3 text-black">
      Yakin ingin menghapus mood <br/> pada tanggal <span className="text-indigo-800">{props.date}</span> ?
    </div>
    <div className="flex flex-col">
      <button onClick={handleDelete} className="w-full bg-red-600 text-white text-center py-2 my-4">Ya, Hapus</button>
      <button onClick={() => props.setOpenDeleteModal(false)} className="w-full bg-gray-300 text-gray-700 text-center py-2">Batal</button>
    </div>
  </div>
  </>
  );
}

export default DeleteMood;
