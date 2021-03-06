import { h, Component } from 'preact'
import { Hero } from './Hero'
export interface AppProps {
  name: string;
}
interface AppState {
  name: string;
}

export class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props)
    this.state = { name: props.name}
  }

  componentDidMount() {
    setTimeout(() => {
      var state = this.state
      state.name = "Preact did mount handler worked"
      this.setState(state)
    }, 2000)
  }

  render(props: AppProps, state: AppState) {
    return (
      <div>
        <Hero />
      </div>

    )
  }
}