import * as S from './styles'
import {textos} from "../../services/textos"
import { ComponentCard } from '../../components'

export function List() {
  return (
    <S.Section>
      {textos.map(item => (
        <ComponentCard
          texto={item}
        />
      ))}
    </S.Section>
  )
}
