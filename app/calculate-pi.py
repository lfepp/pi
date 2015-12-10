import math
from decimal import *

pi = [Decimal(3.14)]
a = [Decimal(1.0)]
b = [Decimal(1/math.sqrt(2))]
t = [Decimal(0.25)]
p = [Decimal(1.0)]

for n in range(0, 10):
  a.append(Decimal((a[n] + b[n])/2))
  b.append(Decimal(math.sqrt(a[n] * b[n])))
  t.append(Decimal(t[n] - (p[n] * Decimal(math.pow(a[n] - a[n+1], 2)))))
  p.append(Decimal(2 * p[n]))

pi = Decimal(math.pow(a[n+1] + b[n+1], 2)) / (4 * t[n+1])
accuracy = 100*(Decimal(math.pi)-pi)/pi

print pi
print math.pi
print accuracy
