<Switch>
        <Route exact path="/" component={Welcome}/>
        {/* <Route path="/" render={defaultRender} /> */}
        <Route exact path="/upload" render={(props)=>
                                 <Upload answers={answers} setAnswers={setAnswers}/>}/>
        <Route path="/upload1" render={(props)=>
                                 <Upload1 answers={answers} setAnswers={setAnswers}/>} />
        <Route path="/upload2" render={(props)=>
                                 <Upload2 answers={answers} setAnswers={setAnswers}/>} />
        <Route path="/menu" component={MainMenu} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/charts" render={(props)=>
                                 <Charts answers={answers} setAnswers={setAnswers}/>} />
        <Route path="/dogs" render={(props)=>
                                 <Dogs answers={answers} setAnswers={setAnswers}/>}  />
        <Route exact path="/thanks" component={Thanks} />
        <Route path="/validation" render={(props)=>
                                 <Validation answers={answers} setAnswers={setAnswers}/>}
        
        
        
        />
        <Route path="/terms" component={Terms} />
      </Switch>