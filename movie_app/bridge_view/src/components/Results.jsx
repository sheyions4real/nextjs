
export default function Results({results}) {
    // console.log(results)
  return (
    <div>
        {
            results.map((result)=>(
                <div key={result.id} className="">
                    <h2>{result.original_title}</h2>
                </div>
            ))
        }
    </div>
  )
}
