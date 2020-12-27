import { FC, useState } from 'react';
import { Icon } from '@components/ui';
import cn from 'classnames';
import s from './Select.module.css';

interface ItemList {
  value: string;
}

interface Props {
  itemsList?: ItemList[];
  id: string;
  onSelect(val: string): void;
  value: string;
}

const Select: FC<Props> = (props) => {
  const { itemsList, value, onSelect, id } = props;
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const closeDropDown = () => setOpen(false);

  const handleSelected = (e) => {
    const value = e.currentTarget.getAttribute('data-value');
    if (onSelect) {
      onSelect(value);
    }
    closeDropDown();
  };

  const handleBlur = () => setTimeout(closeDropDown, 100);

  return (
    <div className={cn(s.root)}>
      <div className={cn(s.inputWrapper)}>
        <input
          className={cn(s.input)}
          type="text"
          id={id}
          value={value}
          readOnly={true}
          onBlur={handleBlur}
          onClick={toggleDropdown}
        />
        <label htmlFor={id} className={cn(s.iconWrapper)}>
          <Icon
            className={cn(s.arrowUp, {
              [s.arrowDown]: isOpen,
            })}
            variant={'arrow'}
            size={'md'}
          />
        </label>
      </div>
      <ul className={cn(s.dropDown, { [s.drop]: isOpen })}>
        {itemsList.map((item) => {
          const isSelected = value === item.value;
          return (
            <li
              key={item.value}
              data-value={item.value}
              className={cn(s.item, isSelected && s.greyBg)}
              onClick={handleSelected}
            >
              {item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
