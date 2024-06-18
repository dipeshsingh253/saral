+++
title = 'Mathjsx Demo Post'
date = 2024-06-18T08:17:26+03:00
draft = false
layout = 'post'
tags = ['latex', 'demo']
+++


## Demonstrating LaTeX in Hugo

This blog post demonstrates how to use LaTeX in Hugo for various types of equations and theories, including mathematics, physics, and chemistry.

### Mathematical Equations

#### Quadratic Formula
The quadratic formula is used to solve quadratic equations and is given by:
@ \( x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \) @

#### Pythagorean Theorem
The Pythagorean theorem relates the lengths of the sides of a right triangle:
@ \( a^2 + b^2 = c^2 \) @

#### Euler's Identity
Euler's identity is a famous equation in mathematics:
@ \( e^{i\pi} + 1 = 0 \) @

### Physics Equations

#### Newton's Second Law
Newton's second law states that the force acting on an object is equal to its mass times its acceleration:
@ \( F = ma \) @

#### Einstein's Mass-Energy Equivalence
Einstein's mass-energy equivalence formula is one of the most famous equations in physics:
@ \( E = mc^2 \) @

#### Gravitational Force
The gravitational force between two masses is given by Newton's law of gravitation:
@ \( F = G \frac{m_1 m_2}{r^2} \) @

### Chemistry Equations

#### Water Molecule
The chemical formula for water is:
@ \text{H}_2\text{O} @

#### Ideal Gas Law
The ideal gas law relates the pressure, volume, and temperature of an ideal gas:
@ \( PV = nRT \) @

#### Chemical Reaction
An example of a chemical reaction, the combustion of methane:
@ \text{CH}_4 + 2\text{O}_2 \rightarrow \text{CO}_2 + 2\text{H}_2\text{O} @

### Conclusion

Using LaTeX in Hugo with the configured delimiters allows for the clear and accurate representation of complex equations in blog posts. This is particularly useful for content related to mathematics, physics, and chemistry.

## Configuration

To enable LaTeX in Hugo, add the following configuration to your `config.toml` file:

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.extensions]
      [markup.goldmark.extensions.passthrough]
        [markup.goldmark.extensions.passthrough.delimiters]
          block = [['@@', '@@']]
          inline = [['@', '@']]
```
