import * as S from './styles'
import { ComponentCard } from '../../components'
import {titulos} from "../../services/titles"
export function Home() {
  return (
    <S.Section>
      {titulos.map(item => (
        <ComponentCard
          texto={item}
        />
      ))}
    </S.Section>
  )
}
