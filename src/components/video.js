import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'


class Videomodal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <div className="">
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.id} onClose={() => this.setState({ isOpen: false })} />
        <div class="card-img-overlay  my-auto" onClick={this.openModal}>
          <h5 class="card-title title-char text-white-50 text-center"><i class="fab fa-youtube text-danger fa-5x"></i></h5>
          
        </div>
      </div>
    )
  }
}
export default Videomodal