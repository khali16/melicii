import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useStyles, theme } from "../components/UI/Logo/Styles";
import { ThemeProvider } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { ListItem, List } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Box } from "@material-ui/core";

const NewRecipe = () => {
  const [ingredientsAmount, setIngredientsAmount] = useState([0]);
  const [stepsAmount, setStepsAmount] = useState([0]);
  const classes = useStyles();
  return (
    <Card style={{ maxWidth: "575px", margin: "auto", marginTop: "20px" }}>
      <CardHeader>Add Recipe</CardHeader>
      <CardContent>
        <form>
          <div className={classes.inputs}>
            <ThemeProvider theme={theme}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="TITLE"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="prepTime"
                label="TOTAL PREP TIME"
                type="number"
              />
              <FormLabel>DIFFICULTY</FormLabel>
              <RadioGroup aria-label="difficulty" row>
                <FormControlLabel
                  value="easy"
                  control={<Radio />}
                  label="Easy"
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio />}
                  label="Medium"
                />
                <FormControlLabel
                  value="difficult"
                  control={<Radio />}
                  label="Difficult"
                />
              </RadioGroup>
              <List>
                {ingredientsAmount.map((_, index) => (
                  <ListItem>
                    <TextField
                      key={index}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="ingredient"
                      label="Ingredient"
                    />
                    <RemoveIcon
                      onClick={() =>
                        setIngredientsAmount(
                          ingredientsAmount.filter((_, id) => index !== id)
                        )
                      }
                    />
                  </ListItem>
                ))}
                <Grid container justify="center">
                  <AddIcon
                    onClick={() =>
                      setIngredientsAmount([
                        ...ingredientsAmount,
                        ingredientsAmount.length,
                      ])
                    }
                  />
                </Grid>
              </List>
              <List>
                {stepsAmount.map((_, index) => (
                  <ListItem>
                    <TextField
                      key={index}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="step"
                      label="Step"
                    />
                    <RemoveIcon
                      onClick={() =>
                        setStepsAmount(
                          stepsAmount.filter((_, id) => index !== id)
                        )
                      }
                    />
                  </ListItem>
                ))}
                <Grid container justify="center">
                  <AddIcon
                    onClick={() =>
                      setStepsAmount([...stepsAmount, stepsAmount.length])
                    }
                  />
                </Grid>
              </List>
            </ThemeProvider>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewRecipe;
