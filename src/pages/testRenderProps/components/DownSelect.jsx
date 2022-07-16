import Downshift from 'downshift';
import React from 'react';
import classnames from 'classnames';
import { Paper, MenuItem, TextField, } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { withStyles } from '@material-ui/core/styles'

const items = [{
  id: "1",
  value: "86",
  search: "中国86CNzhongguo",
  label: "86/中国",
}, {
  id: "14",
  value: "65",
  search: "新加坡65SGxinjiape",
  label: "65/新加坡",
}, {
  id: "12",
  value: "82",
  search: "韩国82KRhanguo",
  label: "82/韩国",
}]

const DropdownSelect = (props) => {
  const { classes } = props;

  const onChange = (selection) => {
    debugger
    props.onChange && props.onChange(selection)
  }
  return (
    <Downshift
      initialSelectedItem={props.value}
      onChange={onChange}
    // itemToString={item => item ? item.value : ""}
    >
      {({
        clearSelection,
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getToggleButtonProps,
        highlightedIndex,
        openMenu,
        closeMenu,
        isOpen,
        inputValue,
        selectedItem,
      }) => {
        const inputProps = getInputProps({
          onChange: (event) => {
            if (event.target.value === '') {
              clearSelection();
            }
          },
          onClick: () => openMenu(),
        })
        return (
          <div className={classnames(classes.container)}>
            <TextField
              {...inputProps}
              fullWidth
              value={props.value}
              InputProps={{
                endAdornment: <KeyboardArrowDownIcon />
              }}
            />
            <div {...getMenuProps()}>
              {isOpen
                ?
                <Paper
                  className={classes.paper}
                  square
                  style={{
                    width: 150
                  }}
                >
                  {
                    items
                      .map((item, index) => {
                        const props = getItemProps({
                          key: item.id,
                          item: item.value,
                        }) // we're calling it here
                        return (<MenuItem
                          component="div"
                          selected={selectedItem === item.value}
                          {...props}
                        >
                          {item.label}
                        </MenuItem>
                        )
                      })
                  }
                </Paper>
                : null}
            </div>
          </div>
        )
      }}
    </Downshift>
  )
}

const styles = {
  container: {
    flexGrow: 1,
    position: "relative"
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: 6,
    left: 0,
    right: 0,
    minHeight: 92,
    maxHeight: 184,
    overflow: "auto",
    minWidth: 150,
  },
  chip: {
    margin: 4
  },
  inputRoot: {
    flexWrap: "wrap"
  },
  inputInput: {
    width: "auto",
    flexGrow: 1
  }
}
export default withStyles(styles)(DropdownSelect);