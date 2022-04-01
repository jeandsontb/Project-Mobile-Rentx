import S from './styled';

interface BulletProps {
    active?: boolean;
  }

const Bullet = ({active = false}: BulletProps) => {
    return (
        <S.Container active={active} />
    )
}

export { Bullet };
