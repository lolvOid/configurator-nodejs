Wardrobe Configurator Info

### Width(ft )
2.5ft -> 12ft (increment - 0.5)

### Height(ft) 
- 6
- 6.5
- 7


### Depth(ft) 
- 1.5 
- 1.75
- 2

### Thickness (in) = 0.875

converted to meter * 0.3048

___
### Generate Vertical Columns (algorithms)


1. ``If width is 9.5, then columns is 10 else columns is floor(width).``
2. ``If segments are created, remove last columns generated.``
3. ``If segments  are not created, create segments mesh along columns value.``

```
    input totalWidth
    var i, columns, Array[segments], offset, group

    function generate_columns(width)

    1.  IF width is not equal 9.5, 
            then, columns is 10
        ELSE,
            columns = Math(FLOOR[width])     //2.5 -> 2
    2. If CREATED, then
            REMOVE(segments)
        ELSE,
            offset = totalWidth / columns
            FOR i to [columns - 1], 
                then,
                    CREATE_MESH[segments]
                    SET_POSITION[segments].x = i * offset;
                    ADD_GROUP[segments]
            END
            SET_POSTION[GROUP].x = offset + POSITION[LEFT_SIDE]
            
#
