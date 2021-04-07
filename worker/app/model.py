from random import random


class MockMiniCpc:

  def __init__(self):
    self.ts_set = 40;
    self.tc_set = 20;
    self.to_set = 42;
    self.flow_set = 200;

    self.temp_sat = 40;
    self.temp_con = 20;
    self.temp_opt = 42;
    self.flow = 200;
    self.conc = 1000;
  
  def __repr__(self):
    return f"{self.temp_sat} {self.temp_con} {self.temp_opt} {self.flow} {self.conc}"

  @staticmethod
  def _update(old, _set, ratio=0.9, fluctuation=0.02):
    return old * ratio + _set * (1 - ratio) + (random() - 0.5) * fluctuation * _set
  
  def update(self):
    self.temp_sat = self._update(self.temp_sat, self.ts_set)
    self.temp_con = self._update(self.temp_con, self.tc_set)
    self.temp_opt = self._update(self.temp_opt, self.to_set)
    self.flow = self._update(self.flow, self.flow_set)
    self.conc = self._update(self.conc, _set=1000, ratio=0.8, fluctuation=0.2)
