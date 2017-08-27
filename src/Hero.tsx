import { h, Component } from 'preact'

interface HeroProps {}

interface HeroState {}

export class Hero extends Component<HeroProps, HeroState> {

  render() {
    return (
      <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="title">
            Main title
          </div>
          <div class="subtitle">
            Sub title in the hero section
          </div>
        </div>
      </div>
    </section>
    )
  }
}