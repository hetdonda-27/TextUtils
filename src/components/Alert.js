
export default function Alert(props) {
  return (
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
      <div style={{ height: '16px' }}>
        <strong>{props.alert.type}</strong>:{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
      </div>
    </div>
  )
}
