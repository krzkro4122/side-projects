import * as Observable from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

let animals = Observable.of('cow', 'shark', 'hamster', 'pigeon')
let ticker = Observable.interval(500)
let combined = Observable.zip(animals, ticker)

combined.subscribe(next => console.log(JSON.stringify(next)))
