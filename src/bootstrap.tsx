import './bootstrap.scss'
import { h, render } from 'preact'
import { App } from './app'

render(<App name="working" />, document.getElementById('app'))